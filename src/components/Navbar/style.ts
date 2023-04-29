import styled from 'styled-components';

export const NavbarContainer = styled.section`
  position: sticky;
  z-index: 99;

  .navbar {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color: #252423;

    .nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      max-width: 1200px;
      margin-left: 1.5rem;
      margin-right: 1.5rem;
      height: calc(3rem + 1.5rem);

      &__logo {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        font-size: 1.1rem;
        color: #e0e0e0;
        font-weight: 400;

        &:hover {
          color: rgba(252, 41, 74, 0.99);
        }
      }

      &__list {
        display: grid;
        gap: 1.5rem;
        grid-template-columns: repeat(3, 10fr);
        list-style: none;
        padding-inline-start: 0;
      }

      &__link {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-size: 14px;
        color: #e0e0e0;
        font-weight: 400;

        &:hover {
          color: rgba(252, 41, 74, 0.99);
        }
      }

      &__icon {
        size: 1.2rem;
      }

      &__close {
        position: absolute;
        right: 2rem;
        bottom: 1rem;
        size: 1.5rem;
        cursor: pointer;
        color: #e0e0e0;
        background-color: transparent;
        border: 0;

        &:hover {
          color: rgba(252, 41, 74, 0.99);
        }
      }

      &__btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }

      &__toggle {
        color: #e0e0e0;
        font-weight: 400;
        font-size: 1.1rem;
        cursor: pointer;
        background-color: transparent;
        border: 0;

        &:hover {
          color: rgba(252, 41, 74, 0.99);
        }
      }

      .show-menu {
        bottom: 0;
      }

      .active-link {
        color: rgba(252, 41, 74, 0.99);
      }
    }
  }

  .scroll-header {
    -webkit-box-shadow: 0 14px 14px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0 14px 14px -14px rgba(0, 0, 0, 0.75);
    box-shadow: 0 14px 14px -14px rgba(0, 0, 0, 0.75);
  }

  @media screen and (max-width: 350px) {
    .navbar {
      .nav {
        margin-left: 1rem;
        margin-right: 1rem;

        &__menu {
          padding: 2rem 0.25rem 4rem;
        }

        &__list {
          column-gap: 0;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    .navbar {
      top: 0;
      bottom: initial;
      padding: 0 1rem;

      .nav {
        column-gap: 1rem;
        margin-left: auto;
        margin-right: auto;

        &__menu {
          margin-left: auto;
        }

        &__list {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;

          column-gap: 2rem;
        }

        &__icon {
          display: none;
        }

        &__close {
          display: none;
        }

        &__toggle {
          display: none;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    .navbar {
      .nav {
        &__menu {
          position: fixed;
          bottom: -100%;
          /* bottom: 0; */
          left: 0;
          width: 100%;
          background-color: #252423;
          padding: 2rem 1.5rem 4rem;
          box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.15);
          border-radius: 1.4rem 1.5rem 0 0;
          transition: 0.3s;
        }
      }
    }
  }

  @media screen and (min-width: 1024px) {
    .navbar {
      padding: 0;
    }
  }
`;
