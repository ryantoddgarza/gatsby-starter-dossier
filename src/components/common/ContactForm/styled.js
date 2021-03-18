import styled from 'styled-components';
import { color, spacing } from '~/design-system';

export const Form = styled.form`
  padding: ${spacing[4]};
  background-color: ${color.ui02};
  color: ${color.text02};

  fieldset {
    margin: 0 0 ${spacing[3]};
    width: 100%;
  }

  input[type='text'],
  input[type='email'],
  textarea {
    width: 100%;
    border: 1px solid #ccc;
    background: #fff;
    margin: 0 0 ${spacing[2]};
    padding: ${spacing[2]};
  }

  input[type='text']:hover,
  input[type='email']:hover,
  textarea:hover {
    border: 1px solid #aaa;
  }

  input:focus,
  textarea:focus {
    outline: 0;
    border: 1px solid #999;
  }
  &::-webkit-input-placeholder {
    color: #888;
  }
  &:-moz-placeholder {
    color: #888;
  }
  &::-moz-placeholder {
    color: #888;
  }
  &:-ms-input-placeholder {
    color: #888;
  }
  textarea {
    height: 8rem;
    max-width: 100%;
    resize: none;
  }

  label.sr-only {
    position: absolute !important;
    height: 1px;
    width: 1px;
    overflow: hidden;
    clip: rect(1px 1px 1px 1px); /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
  }

  button[type='submit'] {
    cursor: pointer;
    width: 100%;
    border: none;
    background: ${color.ui01};
    color: ${color.text01};
    margin: 0 0 ${spacing[2]};
    padding: ${spacing[3]};
  }

  button[type='submit']:hover {
    background: ${color.hoverUI};
  }
`;
