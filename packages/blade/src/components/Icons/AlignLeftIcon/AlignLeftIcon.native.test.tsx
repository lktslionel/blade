import AlignLeftIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.native';

describe('<AlignLeftIcon />', () => {
  it('should render AlignLeftIcon', () => {
    const renderTree = renderWithTheme(
      <AlignLeftIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    ).toJSON();
    expect(renderTree).toMatchSnapshot();
  });
});
