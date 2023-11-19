import express from 'express';
const router = express.Router();
import PostTool from '../models/postTools.js';

router.get('/', async (req, res) => {
  try {
    const tools = await PostTool.find();
    res.json(tools);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.post('/', async (req, res) => {
  const tools = new PostTool({
    brand: req.body.brand,
    toolName: req.body.toolName,
    price: req.body.price,
  });
  try {
    const t1 = await tools.save();
    res.json(t1);
  } catch (error) {
    console.log(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tool = await PostTool.findById(req.params.id);
    res.json(tool);
  } catch (err) {
    res.send('Error' + err);
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const tool = await PostTool.findById(req.params.id);
    tool.brand = req.body.brand;
    tool.toolName = req.body.toolName;
    tool.price = req.body.price;
    const t1 = await tool.save();
    res.json(t1);
  } catch (err) {
    res.status(404).send(`Sorry, can't send that`);
    console.log(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tool = await PostTool.findById(req.params.id);
    tool.brand = req.body.brand;
    const t1 = await tool.remove();
    res.send(`Tool with brand name ${tool.brand} has been removed!`);
  } catch (err) {
    res.status(404).send('Sorry, cant send that');
  }
});

export default router;
