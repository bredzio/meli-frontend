import "./Breadcrumb.scss";

export const Breadcrumbs = ({ items = [] }) => {

    const list = items.map( (item, i, a) => {
        const active = i === a.length - 1;
        const classes = active ? 'meli-active' : '';

        return (
            <li className={classes} itemProp="itemListElement" itemType="http://schema.org/ListItem" itemScope="" key={i}>
                 <a href="/" onClick={e => e.preventDefault()}>
                    {item}
                </a>
            </li>
        );
    });

    return (
        <section className="meli-breadcrumbs">
            <ol className="meli-breadcrumbs-nav" itemType="http://schema.org/BreadcrumbList" itemScope="">
                {list}
            </ol>
        </section>
    );
}

export default Breadcrumbs;