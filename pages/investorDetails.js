class InvestorDetails {
  constructor(page) {
    this.page = page;
  }

  async investorProfileFirstHolder(pan1) {
    await this.page.locator('#search\\ one').click();
    await this.page.locator('#search\\ one').fill(pan1);
    await this.page.getByRole('button', { name: 'Fetch KYC Details' }).click();
  }

  async investorProfileSecondHolder(pan2) {
    await this.page.locator('#fatcaPending\\ two').click();
    await this.page.locator('#fatcaPending\\ two').fill(pan2);
    await this.page.getByRole('button', { name: 'Fetch KYC Details' }).click();
  }

  async investorProfileThirdHolder(pan3) {
    await this.page.locator('#fatcaPending\\ three').click();
    await this.page.locator('#fatcaPending\\ three').fill(pan3);
    await this.page.getByRole('button', { name: 'Fetch KYC Details' }).click();
  }
}

module.exports = InvestorDetails;
