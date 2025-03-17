const { create, findById, findByEmail, update, decryptUser, _users } = require('./user');

describe('User Model Tests', () => {
    test('1. Створення нового користувача', () => {
        const newUser = create({
            email: "test@example.com",
            password: "TestPass123",
            firstName: "Тест",
            lastName: "Користувач",
            phone: "+380991112233"
        });

        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe("test@example.com");
    });

    test('2. Пошук користувача за ID', () => {
        const user = findById("1"); // Адміністратор
        expect(user).not.toBeNull();
        expect(user.email).toBe("admin@example.com");
    });

    test('3. Оновлення користувача', () => {
        const updatedUser = update("2", {
            firstName: "Оновлений",
            lastName: "Юзер",
            phone: "+380993334455"
        });

        expect(decryptUser(updatedUser).firstName).toBe("Оновлений");
    });

    test('4. Дешифрування користувача', () => {
        const user = findById("1");
        const decryptedUser = decryptUser(user);

        expect(decryptedUser.firstName).toBe("Адміністратор");
        expect(decryptedUser.lastName).toBe("Системи");
    });

    test('5. Пошук користувача за email', () => {
        const user = findByEmail("user@example.com");
        expect(user).not.toBeNull();
        expect(user.email).toBe("user@example.com");
    });

    test('6. Створення користувача з існуючим email', () => {
        const duplicateUser = create({
            email: "user@example.com",
            password: "DuplicatePass",
            firstName: "Дубль",
            lastName: "Користувач",
            phone: "+380991122334"
        });

        expect(duplicateUser).toHaveProperty('id');
        expect(duplicateUser.email).toBe("user@example.com");
    });

    test('7. Оновлення користувача без змін', () => {
        const existingUser = findById("2");
        const updatedUser = update("2", {});

        expect(updatedUser).toEqual(existingUser);
    });

    test('8. Створення користувача без деяких полів', () => {
        const newUser = create({
            email: "minimal@example.com",
            password: "MinPass123"
        });

        expect(newUser).toHaveProperty('id');
        expect(newUser.email).toBe("minimal@example.com");
    });

    test('9. Дешифрування нового користувача', () => {
        const newUser = create({
            email: "decrypt@example.com",
            password: "DecryptPass",
            firstName: "Тест",
            lastName: "Дешифрування",
            phone: "+380991234567"
        });

        const decryptedUser = decryptUser(newUser);
        expect(decryptedUser.firstName).toBe("Тест");
        expect(decryptedUser.lastName).toBe("Дешифрування");
    });

    test('10. Оновлення неіснуючого користувача', () => {
        const updatedUser = update("999", { firstName: "FakeUser" });
        expect(updatedUser).toBeNull();
    });

    test('11. Пошук користувача за неіснуючим ID', () => {
        const user = findById("999");
        expect(user).toBeUndefined();
    });

    test('12. Перевірка шифрування та дешифрування пароля', () => {
        const password = "SecurePassword123";
        const encryptedPassword = _users[0].password;
        const decryptedPassword = decryptData(encryptedPassword);

        expect(decryptedPassword).toBe(password);
    });
});
