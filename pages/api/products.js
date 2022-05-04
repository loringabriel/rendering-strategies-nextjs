import { products } from "../../helpers/helpers";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(products);
  } else {
    res.status(404).json();
  }
}
