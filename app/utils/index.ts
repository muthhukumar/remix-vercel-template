const isServerEnvironment: () => boolean = () => typeof window === 'undefined'

export { isServerEnvironment }
