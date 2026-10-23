class Controller {
  constructor(model, database) {
    this.buildReadQuery = model.buildReadQuery;

    this.database = database;
  }
  //Method
  get = async (req, res, variant) => {
    const sql = this.buildReadQuery(req, variant);
    const parameter = { ID: parseInt(req.params.id) };
    try {
      const [result] = await this.database.query(sql, parameter);

      if (result.length === 0)
        res.status(404).json({ message: "No Records Found" });
      else res.status(200).json(result);
    } catch (error) {
      console.log("SQL ERROR:", error);
      res.status(500).json("failed");
    }
  };
}
export default Controller;
