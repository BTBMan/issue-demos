import HelloWorld from '../HelloWorld.vue';
import { MyDirective } from '../../my-directive';
import { vLoading } from 'element-plus/es/components/loading/index';

console.log('===========', vLoading);

describe('HelloWorld', () => {
  it('playground', () => {
    cy.mount(HelloWorld, {
      props: { msg: 'Hello Cypress' },
      global: {
        directives: {
          MyDirective,
          Loading: vLoading,
        },
      },
    });
  });

  // it('renders properly', () => {
  //   cy.mount(HelloWorld, { props: { msg: 'Hello Cypress' } });
  //   cy.get('h1').should('contain', 'Hello Cypress');
  // });
});
