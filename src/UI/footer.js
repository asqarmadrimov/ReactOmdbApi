export default function Futter() {
  return (
    <>
    <footer className="bg-dark text-light p-2 px-4">
      <div className="container-flud ">
        <div className="futter__inner d-flex aling-item-center align-items-center justify-content-between">
          <a className="h1 text-decoration-none text-light" href="/public/index.html">
            Movie
          </a>

          <p>
          © {new Date().getFullYear()} Copyright Text
          </p>
        </div>
      </div>
    </footer>
    </>
  )
}