export const ItemsBySearchRs = ({
    id,
    title,
    currency_id,
    price,
    decimal_places,
    secure_thumbnail,
    thumbnail,
    pictures,
    condition,
    shipping
}) => {
    return {
        item: {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: decimal_places || 2
            },
            picture: pictures && pictures.length ? pictures[0].secure_url : secure_thumbnail || thumbnail,
            condition,
            free_shipping: shipping.free_shipping
        }
    };
};

export const ItemsByIdRs = ({
    id,
    title,
    currency_id,
    price,
    decimal_places,
    secure_thumbnail,
    thumbnail,
    pictures,
    condition,
    shipping,
    sold_quantity,
    description,
}) => {
    return {
        item: {
            id,
            title,
            price: {
                currency: currency_id,
                amount: price,
                decimals: decimal_places || 2
            },
            picture: pictures && pictures.length ? pictures[0].secure_url : secure_thumbnail || thumbnail,
            condition,
            free_shipping: shipping.free_shipping,
            sold_quantity,
            description: description || ''
        }
    };
};

export default {
    ItemsBySearchRs,
    ItemsByIdRs
};