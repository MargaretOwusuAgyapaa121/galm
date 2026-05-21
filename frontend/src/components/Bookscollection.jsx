

const books = [
  {
    id: 1,
    image: '/assets/pv/book/b1.jpeg',
    title: "Loss & Discovery",
    description:
      "A transformational journey through healing, faith, and restoration.",
  },

  {
    id: 2,
    image: '/assets/pv/book/b2.jpeg',
    title: "The African Church",
    description:
      "Powerful insights into leadership, spiritual growth, and revival.",
  },

  {
    id: 3,
    image: '/assets/pv/book/b3.jpeg',
    title: "Wounds That Rise",
    description:
      "A deeply inspiring message about overcoming pain and purpose.",
  },
];

const BookCollection = () => {
  return (
    <section className="book-collection-section">

      {/* SECTION HEADER */}
      <div className="collection-header">

        <span className="collection-tag">
          BOOK COLLECTION
        </span>

        <h2>
          Explore Our <span>Books</span>
        </h2>

        <p>
          Discover transformational books filled with wisdom,
          healing, leadership, faith, and divine inspiration.
        </p>

      </div>

      {/* BOOK GRID */}
      <div className="books-grid">

        {books.map((book) => (
          <div className="book-item" key={book.id}>

            <div className="book-image">

              <img src={book.image} alt={book.title} />

              <div className="book-overlay">

                <a href="/order" className="primary-btn">
                  Order Now
                </a>

              </div>

            </div>

            <div className="book-info">

              <h3>{book.title}</h3>

              <p>{book.description}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default BookCollection;