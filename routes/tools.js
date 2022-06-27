import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let tools = [];

// To get all tools:
router.get('/', (req, res) => {
  res.send(tools);
});

// To create a new tool:
router.post('/', (req, res) => {
  const tool = req.body;

  tools.push({ ...tool, id: uuidv4() });

  res.send(`A new tool with the name ${tool.toolName} added to the database!`);
});

// To get a tool by id
router.get('/:id', (req, res) => {
  const { id } = req.params;

  const foundTool = tools.find((tool) => tool.id === id);
  res.send(foundTool);
});

// To delete a tool by id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  tools = tools.filter((tool) => tool.id !== id);

  res.send(`The tool with id ${id} has been deleted from the database.`);
});

// To update a tool by id
router.patch(':/id', (req, res) => {
  const { id } = req.params;
  const { toolName } = req.body;

  const tool = tools.find((tool) => tool.id === id);

  if (toolName) tool.toolName = toolName;

  res.send(`Tool with the id ${id} has been updated.`);
});

export default router;
