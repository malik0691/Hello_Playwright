
class HelloPage {

    constructor(page) {
        this.page = page;
        this.roleField = page.getByPlaceholder('Select a role');

        this.emailField= page.getByPlaceholder('Enter your email address')
        this.passwordField= page.getByPlaceholder('Enter your password')
        this.signinBtn= page.getByRole('button', { name: 'Sign in' })

        this.dashboardHeading= page.getByRole('heading', { name: 'Dashboard' })
        this.customerMenu= page.locator('a.header-contacts').filter({ hasText: 'Customers' })
        this.customerLink= page.getByRole('link', { name: 'Customers', exact: true })
        this.user= page.getByRole('row', { name: 'Max Mustermann max.' }).getByRole('link')
        this.editBtn= page.getByRole('button', { name: 'Edit' })
        this.firstName= page.getByPlaceholder('Max', { exact: true })
        this.saveBtn= page.getByRole('button', { name: 'Save' })
        this.nameStatus= page.getByText('Name: Maximilian Mustermann', { exact: true })

        this.updatedUser= page.getByRole('row', { name: 'Maximilian Mustermann max.' }).getByRole('link')
        this.updatedfirstName= page.getByPlaceholder('Maximilian', { exact: true })
    }

    enterEmail = async (email) => {
        await this.emailField.fill(email);
    }

    enterpassword = async (password) => {
        await this.passwordField.fill(password);
    }
    
    selectSigninBtn = async () => {
        await this.signinBtn.click();
    }

    selectCustomer = async () => {
        await this.customerMenu.click();
    }

    selectCustomerLink = async () => {
        await this.customerLink.click();
    }

    selectUser = async () => {
        await this.user.click();
    } 

    editUser = async () => {
        await this.editBtn.click();
    } 

    updateFirstname = async (modifiedName) => {
        await this.firstName.clear();
        await this.firstName.fill(modifiedName);
    } 

    clickSaveBtn = async (modifiedName) => {
        await this.saveBtn.click();
    } 

    selectUpdatedUser = async () => {
        await this.updatedUser.click();
    } 

    revertFirstname = async (modifiedRevertName) => {
        await this.updatedfirstName.clear();
        await this.updatedfirstName.fill(modifiedRevertName);
    }

    verifyName = async () => {
        const nameDescription = await this.nameStatus.innerText();
        return nameDescription;
    } 

}

module.exports = HelloPage;

