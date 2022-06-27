import express from 'express';
const router = express.Router();
import Tools from '../models/postTools.js';

router.get('/', async (req, res) => {
  try {
    const tools = await Tools.find();
    res.json(tools);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.post('/', async (req, res) => {
  const tools = new Tools({
    brand: req.body.brand,
    toolName: req.body.toolName,
  });
  try {
    const t1 = await tools.save();
    res.json(t1);
  } catch (error) {
    res.send('Error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tool = await Tools.findById(req.params.id);
    res.json(tool);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const tool = await Tools.findById(req.params.id);
    tool.brand = req.body.brand;
    const t1 = await tool.save();
    res.json(t1);
  } catch (err) {
    res.status(404).send('Sorry, cant send that');
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tool = await Tools.findById(req.params.id);
    tool.brand = req.body.brand;
    const t1 = await tool.remove();
    res.send(`Tool with brand name ${tool.brand} has been removed!`);
  } catch (err) {
    res.status(404).send('Sorry, cant send that');
  }
});

export default router;
