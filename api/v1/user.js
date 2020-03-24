const { publishToQueue } = require("../../rabbitMq");

const users = [{ id: 1, name: "User 1" }, { id: 2, name: "User 2" }];

const fetchAll = async (req, res) => {
  try {
    // const response = await publishToQueue("userEmit", Buffer.from(users));
    const response = await publishToQueue("userEmit", Buffer.from('hello!!!'));
    console.log("fetchAll -> response", response)
    res.status(200).json({ success: true, users });
  } catch (err) {
    res.status(err.statusCode || 500).json({ error: err.message });
  }
};

module.exports = { fetchAll };
