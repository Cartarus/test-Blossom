import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CommentItem } from '../CommentItem';
import { AddComment } from '../AddComment';
import characterReducer from '../../../store/slices/CharacterSlice';

const createMockStore = () => {
  return configureStore({
    reducer: {
      character: characterReducer
    }
  });
};

describe('Character Components', () => {
  test('CommentItem renders comment data correctly', () => {
    const mockComment = {
      id: '1',
      comment: 'Test comment',
      createdAt: '2024-03-20T12:00:00Z'
    };

    render(<CommentItem comment={mockComment} />);

    expect(screen.getByText('Test comment')).toBeInTheDocument();
    
    expect(screen.getByText('Cristian Guerrero')).toBeInTheDocument();
  });

  test('AddComment input updates and button is clickable', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <AddComment id="1" />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Add a comment');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New comment' } });
    expect(input).toHaveValue('New comment');

    expect(button).not.toBeDisabled();
  });

  test('AddComment submits comment and clears input', () => {
    const store = createMockStore();
    render(
      <Provider store={store}>
        <AddComment id="1" />
      </Provider>
    );

    const input = screen.getByPlaceholderText('Add a comment');
    const button = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New comment' } });
    fireEvent.click(button);

    expect(input).toHaveValue('');
  });
}); 