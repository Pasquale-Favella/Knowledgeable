export const backdrop = {

    visible :{ opacity : 1 },
    hidden : { opacity : 0 }
}

export const modal = {
    hidden : { 
        y : "-100vh",
        opacity : 0
    },
    visible : { 
        y : "0px",
        opacity : 1,
        transition : { delay : 0.2 }
    }
}

export const pageVariant = {
    visible :{ opacity : 1 },
    hidden : { opacity : 0 }
}

export const resultPageVariant = {

    hidden : { 
        x : "-60vw",
        opacity : 0
    },
    visible : { 
        x : 0,
        opacity : 1,
        
    }
}