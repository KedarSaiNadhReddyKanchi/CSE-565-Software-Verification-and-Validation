import static org.junit.jupiter.api.Assertions.*;

class VendingMachineTest {

    @org.junit.jupiter.api.Test
    void TestCase1() {
        VendingMachine testcase1 = new VendingMachine();
        assertEquals("Item dispensed and change of 20 returned", testcase1.dispenseItem(40,"candy"));
    }
    @org.junit.jupiter.api.Test
    void TestCase2() {
        VendingMachine testcase = new VendingMachine();
        assertEquals("Item dispensed.", testcase.dispenseItem(25,"coke"));
    }
    @org.junit.jupiter.api.Test
    void TestCase3() {
        VendingMachine testcase = new VendingMachine();
        assertEquals("Item not dispensed, missing 5 cents. Can purchase candy or coke.", testcase.dispenseItem(40,"coffee"));
    }
    @org.junit.jupiter.api.Test
    void TestCase4() {
        VendingMachine testcase = new VendingMachine();
        assertEquals("Item not dispensed, missing 3 cents. Can purchase candy.", testcase.dispenseItem(22,"coke"));
    }
    @org.junit.jupiter.api.Test
    void TestCase5() {
        VendingMachine testcase = new VendingMachine();
        assertEquals("Item not dispensed, missing 2 cents. Cannot purchase item.", testcase.dispenseItem(18,"candy"));
    }
}