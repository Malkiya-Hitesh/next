export const metadata = {
    title: "About - Create Next App",
    description: "About page of the app",
  };
  
  export default function AboutLayout({ children }) {
    return (
      <div className="about">
        {children}
      </div>
    );
  }
  