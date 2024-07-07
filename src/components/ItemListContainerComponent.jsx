import React from "react";
import Card from "react-bootstrap/Card";

const ItemListContainerComponent = ({ products }) => {
    const customStyles = {
        color: "white",
        fontSize: "2rem",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <div style={customStyles}>
            {products.map((product) => {
                return (
                    <Card key={product.id} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={product.thumbnail} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text>
                                {product.description}
                            </Card.Text>
                            <Link to={`/item/${product.id}`}>Ir a detalle</Link>
                        </Card.Body>
                    </Card>
                );
            })}
        </div>
    );
}

export default ItemListContainerComponent;