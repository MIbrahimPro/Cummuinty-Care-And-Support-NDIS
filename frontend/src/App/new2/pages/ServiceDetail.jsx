import Hero from "../components/Hero";




function ServiceDetail() {
    return (
        <>
<Hero
                heading="NDIS Supported Daily Tasks in Logan"
                paragraph="Also servicing the greater Brisbane area"
                image="https://images.unsplash.com/photo-1529397938791-2aba4681454f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                hasForm={true}
                // The 'Request a Call Back' bar is usually present at the bottom left here too
                showCallback={true}
            />
        </>
    )
};
export default ServiceDetail;