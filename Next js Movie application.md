## Next js Movie application



### 1. Create project 

- command create application 
- `npx create-next-app@latest`
- select the option you need



### 2. Start Home page 

- delete all at src/page.js replace it with react functional 



### 3. Add Header component and update the layout structure

- create folder components and file Header.jsx

- import Header.jsx in layout.js

- ```js
  import Header from "../components/Header.jsx";
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    );
  }
  ```

- write header navigation bar and application logo

- ```jsx
  export default function Header() {
    return (
      <div className='flex justify-between items-center p-3 max-w-6xl mx-auto'>
        <ul className='flex gap-4'>
          <li>
            <Link href={'/sign-in'}>Sign in</Link>
          </li>
          <li className='hidden sm:block'>
            <Link href={'/'}>Home</Link>
          </li>
          <li className='hidden sm:block'>
            <Link href={'/about'}>About</Link>
          </li>
        </ul>
        <Link href={'/'} className='flex gap-1 items-center'>
          <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>
            IMDB
          </span>
          <span className='text-xl hidden sm:inline'>Clone</span>
        </Link>
      </div>
    )
  }
  ```

-  