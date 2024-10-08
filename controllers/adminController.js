const Assignment = require('../models/Assignments');
const User = require('../models/UserModel');

// Get all assignments for the admin
const getAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find({ admin: req.user.userId }).populate('userId', 'name').exec();
    res.json(assignments);
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Accept assignment
const acceptAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, { status: 'accepted' });
    res.json({ msg: 'Assignment accepted' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

// Reject assignment
const rejectAssignment = async (req, res) => {
  try {
    await Assignment.findByIdAndUpdate(req.params.id, { status: 'rejected' });
    res.json({ msg: 'Assignment rejected' });
  } catch (error) {
    res.status(500).send('Server error');
  }
};

module.exports = { getAssignments, acceptAssignment, rejectAssignment };
