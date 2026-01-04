// Handle Auth middleware for all get,post,delete,put request
const adminAuth = (req,res,next)=>{
  console.log('Admin Auth Middleware executed');
  const token = 'xyz';
  const isAuthorized = token === 'xyz';
  if(!isAuthorized){
    res.status(401).send('Forbidden: Unauthorized access');
  }
  else{
    next();
  }
};


const userAuth = (req,res,next)=>{
  console.log('User auth Middleware executed');
  const token = 'xyz';
  const isAuthorized = token === 'xyz';
  if(!isAuthorized){
    res.status(401).send('Forbidden: Unauthorized access');
  }
  else{
    next();
  }
};


module.exports = {adminAuth,userAuth};
