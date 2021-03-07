// 1. Logout Wrapper



//true context.username in the LogoutWrapper will have "James" as its value.


//false// context.permissions in the LogoutWrapper will have [ ] as its value.


//true// If none of the components have a SecurityContext.Provider, 
// the value of context.username in the LogoutWrapper will be "".


//false// If a component that renders ControlsComponent provides another SecurityContext.
// Provider, the LogoutWrapper will use it instead of the one provided by ControlsComponent.


//true// A single component can declare multiple instances of SecurityContext.Provider.