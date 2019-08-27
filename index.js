//Creates a function out of '!'.  
//Use this to improve code readability.  
//Instead of...     if (!loggedIn) {}   
//..do this..   if not(loggedIn) {}
const not = value => !value;

export default not;
