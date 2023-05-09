import { VictoryPie, VictoryLabel } from 'victory'
import { useGlobalState } from '../context/GlobalState'
// import { BsPieChartFill } from "react-icons/bs";


export default function ExpenseChart() {
    const { transactions } = useGlobalState();

    const totalIncomes = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0);

    const totalExpenses = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;

    const expensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);
    const incomesPercentage = 100 - (expensesPercentage);

    if (totalIncomes === 0 && totalExpenses === 0) {
        return (
            <div className="p-4 my-2">
                <div className="h-full flex items-center justify-center w-full flex-col">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAABBUlEQVR4nO3VSw4BQRDG8f/O2GGJOJrnHUSII3lcQ4QtYoe98diPTNRsRLqrW49E4ktqW7/p6UoX/PNDuQNbYAZ0gPK34OSlYmAIFEM0rwBdYC6nuxvgrJZAzRcsAiPg8qaxDU7r6IPXgZWhqQbOTh65oCdLQy2c1kD7e00n9YFjzbSPlc1c4ARo26b3khM8NcE9h0au8NYEz3OEryZ47wEHye0X4ERZ6bBas8sB3tjZ52oLDU80cCcHuKmBK/K8hULPQEkDI0s8FNzHIZGssk/Rhcs6zFKTJe6LHoAqnqnKV7uia6DBh4lkicfKQUrvtEDAlGWfzuRBuEltZN21XKb3H76ZB2/KeGvaMWLaAAAAAElFTkSuQmCC" />
                        <h1 className="text-3xl font-bold my-2">No data yet</h1>
                </div>
            </div>
        );
    }

    return (
        <div >
            <VictoryPie
                colorScale={["#e74c3c", "#2ecc71"]}
                data={[
                    { x: "Expenses", y: expensesPercentage },
                    { x: "Incomes", y: incomesPercentage },
                ]}
                animate={{
                    duration: 2000,
                }}
                labels={({ datum }) => `${datum.y.toFixed(2)} %`}
                labelComponent={
                    <VictoryLabel
                        angle={45}
                        style={{
                            fill: "white",
                        }}
                    />
                }
            />
        </div>
    );
}
