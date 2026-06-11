
export const mapCategory = (category: string) => { 
    switch (category) {
        case 'with-job':
            return true
        case 'without-job':
            return false
        default:
            return undefined
    }
};
