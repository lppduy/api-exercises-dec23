const orders = [
  { id: 1, status: 'Pending' },
  { id: 2, status: 'Processing' },
];

function updateOrder(req, res) {
  const orderId = parseInt(req.params.id);
  const { status } = req.body;

  const orderToUpdate = orders.find(order => order.id === orderId);
  if (!orderToUpdate) {
    return res.status(404).json({ error: 'Order not found' });
  }

  orderToUpdate.status = status;

  req.app.get('io').emit('orderUpdate', orderToUpdate);

  res.json({ message: 'Order status updated successfully', order: orderToUpdate });
}

module.exports = {
  updateOrder,
};
