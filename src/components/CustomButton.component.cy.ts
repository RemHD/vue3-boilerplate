import CustomButtonComponent from './CustomButton.component.vue'

describe('<CustomButtonComponent />', () => {
  it('renders with correct props and default value', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(CustomButtonComponent, {
      props: {
        label: 'custom button'
      }
    })

    cy.get('.custom-primary-button').should('have.text', 'custom button')
  })

  it('renders disabled button', () => {
    cy.mount(CustomButtonComponent, {
      props: {
        label: 'disabled button',
        isDisabled: true
      }
    })

    cy.get('button.custom-primary-button.custom-disabled-button').should('have.attr', 'disabled')
  })
})
