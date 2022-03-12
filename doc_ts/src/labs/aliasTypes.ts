// TYPE ALIAS
type StringOfNumber = string | number;
type Student = { name: string; id: StringOfNumber };
const studentDetails = (id: StringOfNumber, studentName: string) => {
  console.log(`Student ${studentName} has id: ${id}`);
};
studentDetails(123, "henry");
studentDetails("456", "hung");

const greet = (user: Student) =>
  console.log(`${user.name} with id ${user.id} says hello`);
greet({name: 'henry', id: 123})

