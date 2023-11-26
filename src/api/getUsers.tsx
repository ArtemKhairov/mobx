import axios from "axios";
import { TUser } from "../store/userStore";

export const getUsers = async () =>
  (await axios.get<TUser[]>("https://jsonplaceholder.org/users")).data;
