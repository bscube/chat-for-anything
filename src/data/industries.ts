
export interface Industry {
  id: string;
  name: string;
  icon: string;
  description: string;
  welcomeMessage: string;
  defaultResponse: string;
  quickQuestions: string[];
  responses: { [key: string]: string };
}

export const industries: Industry[] = [
  {
    id: 'general',
    name: 'General',
    icon: '🤖',
    description: 'General purpose AI assistant',
    welcomeMessage: 'Hello! I\'m here to help you with any questions you might have. How can I assist you today?',
    defaultResponse: 'I understand your question. While I may not have a specific answer, I\'m here to help in any way I can. Could you provide more details?',
    quickQuestions: ['How can you help me?', 'What can you do?', 'Tell me about yourself'],
    responses: {
      'hello,hi,hey': 'Hello! Great to meet you. How can I help you today?',
      'help,assist,support': 'I\'m here to help! I can answer questions, provide information, and assist with various tasks. What do you need help with?',
      'thanks,thank you': 'You\'re very welcome! I\'m happy I could help. Is there anything else you\'d like to know?',
      'bye,goodbye': 'Goodbye! Feel free to come back anytime if you need assistance. Have a great day!',
    }
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    icon: '🏥',
    description: 'Medical and healthcare assistance',
    welcomeMessage: 'Welcome to Healthcare Assistant! I can help with general health information, appointment scheduling, and medical queries. How can I assist you today?',
    defaultResponse: 'For specific medical concerns, please consult with a healthcare professional. I can provide general information - what would you like to know?',
    quickQuestions: ['Schedule an appointment', 'Insurance information', 'Symptoms checker'],
    responses: {
      'appointment,schedule': 'I can help you schedule an appointment! Please provide your preferred date and time, and I\'ll check availability with our medical staff.',
      'insurance,coverage': 'For insurance questions, I can connect you with our billing department. Most major insurances are accepted. Would you like me to verify your coverage?',
      'symptoms,pain,sick': 'I understand you\'re not feeling well. While I can\'t diagnose conditions, I recommend speaking with a healthcare provider. Would you like me to schedule an urgent care appointment?',
      'prescription,medication': 'For prescription refills or medication questions, please contact your pharmacy or doctor directly. I can help you find their contact information.',
      'emergency': 'If this is a medical emergency, please call 911 immediately or go to your nearest emergency room. For urgent but non-emergency care, I can help you find urgent care centers.',
    }
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: '💰',
    description: 'Banking and financial services',
    welcomeMessage: 'Welcome to Financial Services! I can help with account inquiries, transactions, loan information, and general banking questions. How may I assist you?',
    defaultResponse: 'For account-specific information, you may need to verify your identity. I can help with general banking questions or connect you with a specialist.',
    quickQuestions: ['Check account balance', 'Loan information', 'Investment options'],
    responses: {
      'balance,account': 'To check your account balance, please log into your online banking or use our mobile app. For security reasons, I cannot access account details directly. Need help with login issues?',
      'loan,mortgage,credit': 'I can provide information about our loan products! We offer personal loans, mortgages, and business loans. Would you like to know about rates, requirements, or the application process?',
      'investment,savings': 'We offer various investment and savings options including CDs, money market accounts, and investment portfolios. Would you like to speak with a financial advisor?',
      'transfer,payment': 'You can transfer funds through online banking, mobile app, or by visiting a branch. International transfers may have different requirements. What type of transfer do you need help with?',
      'fraud,suspicious': 'If you suspect fraudulent activity, please call our fraud hotline immediately at 1-800-FRAUD or freeze your cards through the mobile app. Your security is our priority.',
    }
  },
  {
    id: 'retail',
    name: 'Retail',
    icon: '🛍️',
    description: 'Shopping and customer service',
    welcomeMessage: 'Welcome to our store! I\'m here to help you find products, check order status, handle returns, and answer any shopping questions. What can I help you with?',
    defaultResponse: 'I\'d be happy to help you with your shopping needs! Could you provide more details about what you\'re looking for?',
    quickQuestions: ['Track my order', 'Return policy', 'Product recommendations'],
    responses: {
      'order,tracking,delivery': 'I can help you track your order! Please provide your order number or email address, and I\'ll give you the latest shipping updates.',
      'return,refund,exchange': 'Our return policy allows returns within 30 days with receipt. Items must be in original condition. Would you like to process a return or exchange?',
      'product,item,find': 'I\'d love to help you find the perfect product! What are you shopping for today? I can check availability and suggest similar items.',
      'price,cost,sale': 'I can check current prices and any ongoing promotions. Are you looking for information about a specific item or interested in our current sales?',
      'size,fit': 'For sizing questions, I recommend checking our size guide or reading customer reviews. Many items also have detailed measurements. What product are you sizing?',
    }
  },
  {
    id: 'tech',
    name: 'Tech Support',
    icon: '💻',
    description: 'Technical assistance and IT support',
    welcomeMessage: 'Hello! I\'m your technical support assistant. I can help troubleshoot issues, provide setup guidance, and answer technical questions. What problem can I help solve?',
    defaultResponse: 'I\'m here to help with technical issues! Could you describe the problem you\'re experiencing in more detail? Include any error messages you\'ve seen.',
    quickQuestions: ['Password reset', 'Software installation', 'Network issues'],
    responses: {
      'password,login,access': 'For password issues, I can guide you through the reset process. Have you tried using the "Forgot Password" link? I can also help you set up two-factor authentication for better security.',
      'install,setup,download': 'I can help with software installation! What program are you trying to install? Make sure you have admin rights and enough disk space. Need step-by-step guidance?',
      'network,internet,wifi': 'Network issues can be frustrating! Let\'s start with basic troubleshooting: Have you tried restarting your router? I can guide you through checking your connection settings.',
      'slow,performance,speed': 'Performance issues can have several causes. Let\'s check if your system needs updates, has enough storage space, or if there are too many programs running. What device are you using?',
      'error,bug,crash': 'Error messages can help us diagnose the problem. Could you share the exact error message? Also, when did this issue start occurring?',
    }
  },
  {
    id: 'education',
    name: 'Education',
    icon: '🎓',
    description: 'Academic support and learning assistance',
    welcomeMessage: 'Welcome to Education Support! I can help with course information, assignment guidance, academic resources, and learning strategies. How can I support your educational journey?',
    defaultResponse: 'I\'m here to support your learning! Whether you need help with concepts, study strategies, or academic resources, I\'m happy to assist. What subject or topic interests you?',
    quickQuestions: ['Study tips', 'Course schedule', 'Assignment help'],
    responses: {
      'study,exam,test': 'Great question about studying! Effective study techniques include active recall, spaced repetition, and practice testing. What subject are you studying for? I can suggest specific strategies.',
      'assignment,homework,project': 'I can help guide you through assignments! While I can\'t do the work for you, I can help you understand concepts, structure your approach, and find resources. What\'s your assignment about?',
      'schedule,class,course': 'For course schedules and registration, check your student portal or contact the registrar\'s office. I can help you understand degree requirements or suggest course sequences.',
      'research,sources,citation': 'Research help is one of my specialties! I can guide you on finding credible sources, proper citation formats (APA, MLA, Chicago), and organizing your research. What\'s your research topic?',
      'math,science,english': 'I love helping with academic subjects! Whether it\'s solving equations, understanding scientific concepts, or improving writing skills, I\'m here to help. What specific topic do you need assistance with?',
    }
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: '✈️',
    description: 'Travel planning and booking assistance',
    welcomeMessage: 'Welcome to Travel Services! I can help you plan trips, book flights and hotels, provide destination information, and assist with travel-related questions. Where would you like to go?',
    defaultResponse: 'I\'d love to help you plan your travel! Whether you\'re looking for destinations, booking assistance, or travel tips, I\'m here to help. What are you planning?',
    quickQuestions: ['Flight booking', 'Hotel recommendations', 'Travel requirements'],
    responses: {
      'flight,airline,booking': 'I can help you find and book flights! What\'s your departure city and destination? Also, do you have preferred dates? I\'ll search for the best options and prices.',
      'hotel,accommodation,stay': 'Looking for a place to stay? I can recommend hotels based on your budget, location preferences, and amenities needed. What city will you be visiting?',
      'destination,travel,vacation': 'Exciting! Where are you thinking of traveling? I can provide information about destinations, local attractions, weather, and travel tips. Any specific interests or activities?',
      'passport,visa,requirements': 'Travel document requirements vary by destination. I can help you check visa requirements, passport validity needs, and any health documentation required for your trip.',
      'cancel,change,refund': 'For booking changes or cancellations, I can help you understand the policies and guide you through the process. Do you have your booking confirmation number?',
    }
  },
  {
    id: 'realestate',
    name: 'Real Estate',
    icon: '🏠',
    description: 'Property buying, selling, and renting',
    welcomeMessage: 'Welcome to Real Estate Services! I can help you buy, sell, or rent properties, provide market information, and answer real estate questions. How can I assist with your property needs?',
    defaultResponse: 'I\'m here to help with all your real estate needs! Whether you\'re buying, selling, or renting, I can provide guidance and information. What are you looking for?',
    quickQuestions: ['Property search', 'Market analysis', 'Mortgage information'],
    responses: {
      'buy,purchase,home': 'Looking to buy a home? That\'s exciting! I can help you search properties, understand the buying process, and connect you with agents. What\'s your budget and preferred location?',
      'sell,listing,market': 'Thinking of selling your property? I can help you understand current market conditions, pricing strategies, and the selling process. Would you like a market analysis for your area?',
      'rent,lease,tenant': 'Looking for rental properties? I can help you find listings, understand lease terms, and guide you through the rental process. What type of property and location are you interested in?',
      'mortgage,loan,financing': 'Mortgage questions are important! I can explain different loan types, help you understand rates and terms, and connect you with lenders. Are you a first-time buyer?',
      'price,value,appraisal': 'Property values depend on many factors including location, condition, and market trends. I can help you understand pricing in your area and suggest getting a professional appraisal.',
    }
  }
];
