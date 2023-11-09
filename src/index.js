setTimeout(async () => {
    console.log("Before dynamic import", ExposedClass);
    const { OtherClass } = await import("./other_class");
    console.log(OtherClass);
    console.log("After dynamic import", ExposedClass);
}, 1000);