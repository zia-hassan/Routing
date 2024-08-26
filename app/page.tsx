import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import Footer from '../Components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
    
      <div className="flex flex-1">

           
        <main className="bg-gray-200 flex-1 p-8">
        <div className="mx-[5%] my-6  h-fit p-4 rounded bg-green-300 text-black flex flex-col gap-2">
      <h1 className=" text-2xl">Description</h1>

      <p className=" text-justify">
        NestJS, Next.js, React, and Node.js are powerful tools for modern web
        development, each serving distinct roles. Node.js is a server-side
        runtime that enables JavaScript execution on the backend, offering a
        non-blocking, event-driven architecture ideal for scalable applications.
        NestJS builds on Node.js, providing a robust framework with a modular
        architecture and TypeScript-first approach, making it perfect for
        developing scalable, maintainable server-side applications. On the
        frontend, React.js is a JavaScript library focused on building dynamic
        user interfaces through its component-based architecture and virtual DOM
        for efficient rendering. Next.js extends React by adding server-side
        rendering, static site generation, and a rich set of features for
        building optimized, production-ready applications. Together, these
        frameworks enable developers to create full-stack applications with a
        seamless developer experience and efficient performance. NestJS,
        Next.js, React, and Node.js are powerful tools for modern web
        development, each serving distinct roles. Node.js is a server-side
        runtime that enables JavaScript execution on the backend, offering a
        non-blocking, event-driven architecture ideal for scalable applications.
        NestJS builds on Node.js, providing a robust framework with a modular
        architecture and TypeScript-first approach, making it perfect for
        developing scalable, maintainable server-side applications. On the
        frontend, React.js is a JavaScript library focused on building dynamic
        user interfaces through its component-based architecture and virtual DOM
        for efficient rendering. Next.js extends React by adding server-side
        rendering, static site generation, and a rich set of features for
        building optimized, production-ready applications. Together, these
        frameworks enable developers to create full-stack applications with a
        seamless developer experience and efficient performance. NestJS,
        Next.js, React, and Node.js are powerful tools for modern web
        development, each serving distinct roles. Node.js is a server-side
        runtime that enables JavaScript execution on the backend, offering a
        non-blocking, event-driven architecture ideal for scalable applications.
        NestJS builds on Node.js, providing a robust framework with a modular
        architecture and TypeScript-first approach, making it perfect for
        developing scalable, maintainable server-side applications. On the
        frontend, React.js is a JavaScript library focused on building dynamic
        user interfaces through its component-based architecture and virtual DOM
        for efficient rendering. Next.js extends React by adding server-side
        rendering, static site generation, and a rich set of features for
        building optimized, production-ready applications. Together, these
        frameworks enable developers to create full-stack applications with a
        seamless developer experience and efficient performance.
      </p>
    </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card title="Next JS" description="Next.js is a powerful open-source React framework that enables developers to build fast and user-friendly web applications. It combines the flexibility of React with a rich set of features designed to enhance both development and user experience." />
            <Card title="React JS" description="React.js is widely used in both small and large-scale projects, from simple websites to complex web applications. Its focus on components, performance, and developer experience has made it a leading choice for front-end development." />
            <Card title="Node JS" description="Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code on the server side, outside of a web browser. Built on Chrome's V8 JavaScript engine, Node.js is designed for building scalable and high-performance network applications." />
            <Card title="Nest JS" description="Node.js is an open-source, cross-platform runtime environment that allows developers to execute JavaScript code on the server side, outside of a web browser. Built on Chrome's V8 JavaScript engine, Node.js is designed for building scalable and high-performance network applications." />
          </div> */}
        </main>
      </div>
      {/* <footer className="bg-black text-white p-8">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold">Logo</h3>
          </div>
          <div className="flex space-x-8">
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <ul>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Profile</h3>
              <ul>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </footer> */}
      
      <div>
      </div>
    </div>
  );
}
