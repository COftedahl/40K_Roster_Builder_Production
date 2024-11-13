// import { ThemeProvider } from "@emotion/react";
// import { createContext, useEffect, useState } from "react";

// interface RoutingContextProps {
//   children?: JSX.Element;
// }

// const RoutingContext: React.FC<RoutingContextProps> = ({children}) => {

//   const routingContext = createContext("/");
//   const [route, setRoute] = useState<string>("/");

//   useEffect(() => {
//     setRoute(window.location.pathname);
//   }, [window.location]);
  
//   return (
//     <>
//       <routingContext.Provider value={route}>
//         {children}
//       </routingContext.Provider>
//     </>
//   );
// }

// export default RoutingContext;