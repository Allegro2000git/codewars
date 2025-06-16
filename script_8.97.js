function hello(name) {
    if (!name) {
        return "Hello, World!";
    }
    const formattedName = name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1);
    return `Hello, ${formattedName}!`;
}