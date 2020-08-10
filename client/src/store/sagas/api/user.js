import customAxios from "../../../common/api/axios";

export async function getUserApi() {
    try {
        const { data } = await customAxios.get("users");

        return data;
    } catch (error) {
        console.log("getUserApi saga api ", error);
    }

    return null;
}
