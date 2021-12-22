
const FooterData = {
  column1: {
    title: "Features",
    links: {
      home: {
        url: "/",
        label: "Home"
      },
      About: {
        url: "/about",
        label: "About"
      },
      Blog: {
        url: "/blog",
        label: "Blog"
      },
    },
  },
  column2: {
    title: "Guides",
    links: {
      home: {
        url: "/",
        label: "Home"
      },
      About: {
        url: "/about",
        label: "About"
      },
      Blog: {
        url: "/blog",
        label: "Blog"
      },
    }
  },
  column3: {
    title: "Comparison",
    links: {
      home: {
        url: "/",
        label: "Home"
      },
      About: {
        url: "/about",
        label: "About"
      },
      Blog: {
        url: "/blog",
        label: "Blog"
      },
    }
  },
  column4: {
    title: "Quick Links",
    links: {
      home: {
        url: "/",
        label: "Home"
      },
      About: {
        url: "/about",
        label: "About"
      },
      Blog: {
        url: "/blog",
        label: "Blog"
      },
      Contact: {
        url: "/contact",
        label: "Contact"
      },
    }
  },
};



// data && Object.keys(data).map((key, index) => {
  //   const column = data[key]
  //   console.log("Test: ", column);
  //   return (
  //     <div className="flex-equal-columns" key={index}>
  //       {
  //         Object.keys(column).map((key, index) => {
  //           console.log("test: ", column[key])
  //           if (column[key].title)
  //             return (<p>{column[key].title}</p>)
  //           else
  //             return (<p>nav bar</p>)
  //           return (<p>{column[key].title}</p>)
  //           if (column[key].Links) {
  //             return (<nav>
  //               {
  //                 Object.keys(column).map((key, index) => (
  //                   <Link to={column[key].url} key={index}>{column[key].label}</Link>     
  //                 ))
  //               }
  //             </nav>)
  //           }
  //         })
  //       }
  //     </div>
  //   )
  // })