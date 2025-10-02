interface img_element_props {
  className: string;
  alt: string;
  src: string;
}

export default interface header_slider_props {
  id: number;
  img_props: img_element_props;
  route: string;
}
