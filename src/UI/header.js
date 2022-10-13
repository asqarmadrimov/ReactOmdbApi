import img from '../../src/imgs/bookmarks.svg'


export default function Header() {
  return (
    <>
      <header className="bg-secondary p-2">
        <div className="container-flud">
          <div className="header__inner d-flex align-items-center justify-content-between">
            <div className="header__logo">
              <a className="h1 text-decoration-none text-light" href="/public/index.html">
                Movie
              </a>
            </div>
            <button className="btn btn-light p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
              <img className='m-0 p-0' src={img} alt="imgs" width={30} height={25}/>
            </button>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                ...
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
} 