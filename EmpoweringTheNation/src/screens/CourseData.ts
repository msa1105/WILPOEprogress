
import Course from './Course';

const sixMonthCourses: Course[] = [
  {
    id: '1',
    title: 'First Aid',
    fee: 1500,
    purpose: 'To provide first aid awareness and basic life support',
    content: ['Wounds and bleeding', 'Burns and fractures', 'Emergency scene management', 'CPR', 'Respiratory distress']
  },
  {
    id: '2',
    title: 'Sewing',
    fee: 1500,
    purpose: 'To provide alterations and new garment tailoring services',
    content: ['Types of stitches', 'Threading a sewing machine', 'Sewing buttons, zips, hems, and seams', 'Alterations', 'Designing and sewing new garments']
  },
  {
    id: '3',
    title: 'Landscaping',
    fee: 1500,
    purpose: 'To provide landscaping services for new and established gardens',
    content: ['Indigenous and exotic plants and trees', 'Fixed structures', 'Balancing of plant and trees', 'Aesthetics of plant shapes and colours', 'Garden layout']
  },
  {
    id: '4',
    title: 'Life Skills',
    fee: 1500,
    purpose: 'To provide skills to navigate basic life necessities',
    content: ['Opening a bank account', 'Basic labour law', 'Basic reading and writing literacy', 'Basic numeric literacy']
  }
];

const shortCourses: Course[] = [
  {
    id: '5',
    title: 'Child Minding',
    fee: 750,
    purpose: 'To provide basic child and baby care',
    content: ['Birth to six-month-old baby needs', 'Seven-month to one-year-old needs', 'Toddler needs', 'Educational toys']
  },
  {
    id: '6',
    title: 'Cooking',
    fee: 750,
    purpose: 'To prepare and cook nutritious family meals',
    content: ['Nutritional requirements', 'Types of protein, carbohydrates, and vegetables', 'Planning meals', 'Preparation and cooking of meals']
  },
  {
    id: '7',
    title: 'Garden Maintenance',
    fee: 750,
    purpose: 'To provide basic knowledge of watering, pruning, and planting in a domestic garden.',
    content: ['Water restrictions and watering requirements', 'Pruning and propagation of plants', 'Planting techniques for different plant types']
  }
];

export { sixMonthCourses, shortCourses };
