class Controller {
  constructor(model, database) {
    this.buildReadQuery = model.buildReadQuery;
    this.buildCreateQuery = model.buildCreateQuery;
    this.validate = model.validate;
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
  post = async (req, res) => {
    if (this.validate) {
      const errors = this.validate(req.body ?? {});
      if (errors.length > 0)
        return res.status(400).json({ message: errors.join(", ") });
    }
    const sql = this.buildCreateQuery(req);
    const parameters = req.body;
    console.log(parameters);
    try {
      const status = await this.database.query(sql, parameters);
      this.get({ params: { id: status[0].insertId } }, res, "primary");
    } catch (error) {
      console.log("SQL ERROR:", error);
      res.status(500).json("failed");
    }
  };
}
export default Controller;
