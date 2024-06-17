function modifyUser(user, target, value) {
    const newUser = {
        ...user,
        [target]: value
    };
    return newUser;
}

function main() {
    const user = {
        username: "admin",
        password: "1234"
    }

    // delete user.password; -> 객체안의 값을 지우는 방법

    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");
    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2)

    const userList = [user, newUser];   // 100번 주소 -> 배열을 복사하는게 아니라
    const newUserList = [...userList];  // 200번 주소    값들을 복사하는거여서 주소가 다름
                                        // 스프레드 -> 깊은 복사
    // const newUserList = [...userList, newUser2]; userList 배열을 복사하고 그뒤에 새로운값 축가

    const userList2 = userList; // 얕은 복사 -> 배열 주소 복사


}

main();