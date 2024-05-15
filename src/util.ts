function capitalizeFirstLetter(s: string): string {

    switch (s.length) {
        case 0:
            return s;
        case 1:
            return s[0].toUpperCase();
        default:
            return s[0].toUpperCase() + s.substring(1);
    }
}

export { capitalizeFirstLetter };
