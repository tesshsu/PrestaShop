// Import utils
import date from '@utils/date';
import helper from '@utils/helpers';
import testContext from '@utils/testContext';

// Import commonTests
import {createCartRuleTest} from '@commonTests/BO/catalog/createDeleteCartRule';
import {deleteCustomerTest} from '@commonTests/BO/customers/createDeleteCustomer';
import foAccountCommon from '@commonTests/FO/account';

// Import FO pages
import homePage from '@pages/FO/home';
import foLoginPage from '@pages/FO/login';
import foMyAccountPage from '@pages/FO/myAccount';
import foVouchersPage from '@pages/FO/myAccount/vouchers';

// Import data
import CartRuleFaker from '@data/faker/cartRule';
import CustomerFaker from '@data/faker/customer';

import {expect} from 'chai';
import type {BrowserContext, Page} from 'playwright';

const baseContext: string = 'functional_FO_userAccount_viewVouchers';

/*
Pre-condition:
- Create customer
- Create 2 cart rules for the customer
Scenario:
- Go To FO and sign in
- Check vouchers in account page
Post-condition:
- Delete customer
 */
describe('FO - Account : View vouchers', async () => {
  let browserContext: BrowserContext;
  let page: Page;

  // Data to create a date format
  const pastDate: string = date.getDateFormat('yyyy-mm-dd', 'past');
  const futureDate: string = date.getDateFormat('yyyy-mm-dd', 'future');
  const expirationDate: string = date.getDateFormat('mm/dd/yyyy', 'future');
  const customerData: CustomerFaker = new CustomerFaker({});
  const firstCartRule: CartRuleFaker = new CartRuleFaker({
    code: 'promo20',
    customer: customerData.email,
    discountType: 'Percent',
    discountPercent: 20,
    dateFrom: pastDate,
    dateTo: futureDate,
  });
  const secondCartRule: CartRuleFaker = new CartRuleFaker({
    code: 'freeShipping',
    customer: customerData.email,
    freeShipping: true,
    dateFrom: pastDate,
    dateTo: futureDate,
  });

  // Pre-condition: Create new account on FO
  foAccountCommon.createAccountTest(customerData, `${baseContext}_preTest_1`);

  // Pre-condition: Create 2 cart rules for the created customer
  [firstCartRule, secondCartRule].forEach((cartRule, index) => {
    createCartRuleTest(cartRule, `${baseContext}_preTest_${index + 2}`);
  });

  // before and after functions
  before(async function () {
    browserContext = await helper.createBrowserContext(this.browser);
    page = await helper.newTab(browserContext);
  });

  after(async () => {
    await helper.closeBrowserContext(browserContext);
  });

  describe('View vouchers on FO', async () => {
    it('should open the shop page', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'goToShopFO', baseContext);

      await homePage.goTo(page, global.FO.URL);

      const result = await homePage.isHomePage(page);
      await expect(result).to.be.true;
    });

    it('should go to login page', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'goToLoginPageFO', baseContext);

      await homePage.goToLoginPage(page);

      const pageTitle = await foLoginPage.getPageTitle(page);
      await expect(pageTitle, 'Fail to open FO login page').to.contains(foLoginPage.pageTitle);
    });

    it('should sign in with created customer', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'sighInFO', baseContext);

      await foLoginPage.customerLogin(page, customerData);

      const isCustomerConnected = await foLoginPage.isCustomerConnected(page);
      await expect(isCustomerConnected, 'Customer is not connected').to.be.true;
    });

    it('should go to vouchers page', async function () {
      await testContext.addContextItem(this, 'testIdentifier', 'goToFOVouchersPage', baseContext);

      await homePage.goToMyAccountPage(page);
      await foMyAccountPage.goToVouchersPage(page);

      const pageHeaderTitle = await foVouchersPage.getPageTitle(page);
      await expect(pageHeaderTitle).to.equal(foVouchersPage.pageTitle);
    });

    [
      {args: {column: 'code', row: 1, value: firstCartRule.code}},
      {args: {column: 'description', row: 1, value: firstCartRule.name}},
      {args: {column: 'quantity', row: 1, value: '1'}},
      {args: {column: 'value', row: 1, value: '20.00%'}},
      {args: {column: 'minimum', row: 1, value: 'None'}},
      {args: {column: 'cumulative', row: 1, value: 'Yes'}},
      {args: {column: 'expiration_date', row: 1, value: expirationDate}},
      {args: {column: 'code', row: 2, value: secondCartRule.code}},
      {args: {column: 'description', row: 2, value: secondCartRule.name}},
      {args: {column: 'quantity', row: 2, value: '1'}},
      {args: {column: 'value', row: 2, value: 'Free shipping'}},
      {args: {column: 'minimum', row: 2, value: 'None'}},
      {args: {column: 'cumulative', row: 2, value: 'Yes'}},
      {args: {column: 'expiration_date', row: 2, value: expirationDate}},
    ].forEach((cartRule, index) => {
      it(`should check the voucher ${cartRule.args.column} n°${cartRule.args.row}`, async function () {
        await testContext.addContextItem(this, 'testIdentifier', `checkVoucher${index}`, baseContext);

        const cartRuleTextColumn = await foVouchersPage.getTextColumnFromTableVouchers(
          page,
          cartRule.args.row,
          cartRule.args.column,
        );
        await expect(cartRuleTextColumn).to.equal(cartRule.args.value);
      });
    });
  });

  // Post-condition: Delete created customer
  deleteCustomerTest(customerData, `${baseContext}_postTest`);
});
