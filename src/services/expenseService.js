import axiosClient from "../api/axiosClient";

export const getAllExpenses = () => {
    return axiosClient.get("/expenses");
};