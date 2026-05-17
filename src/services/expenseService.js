import axiosClient from "../api/axiosClient";

export const getAllExpense = () => {
    return axiosClient.get("/expense");
};