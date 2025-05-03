# Security Policy

## Supported Versions

LokaID is currently under active development. Security updates will be applied to the latest version.

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within LokaID, please submit a report via:

- Email: security@gilangpratama.id
- GitHub Security Advisories: https://github.com/gpstash/lokaid/security/advisories/new

Please include the following information in your report:
- A clear description of the vulnerability
- Steps to reproduce the issue
- Potential impact of the vulnerability
- Suggested mitigations (if any)

We aim to respond to security reports within 48 hours and will work with you to understand and resolve the issue promptly.

## Security Measures Implemented

LokaID implements the following security measures:

### Input Validation and Sanitization
- All route parameters are validated using strict regex patterns
- Input length and format restrictions
- Comprehensive validation for all external inputs

### Output Security
- Content-Type headers properly set
- Appropriate caching headers
- JSON serialization with error handling

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
- Permissions-Policy: camera=(), microphone=(), geolocation=()

### Rate Limiting
- IP-based rate limiting using Cloudflare's Cache API
- 240 requests per minute (4 per second) per IP address
- Progressive backoff for excessive requests

### Data Security
- Dynamic loading of required data files
- No sensitive data stored in the application
- Careful error handling to prevent information disclosure

### CI/CD Security
- Automated security scanning in CI pipeline
- Dependency vulnerability scanning
- Static code analysis
- Secret detection
- Input validation checks

## Best Practices for Contributors

When contributing to LokaID, please follow these security best practices:

1. **Input Validation**: Always validate and sanitize user inputs
2. **Error Handling**: Use try/catch blocks and avoid exposing sensitive information in error messages
3. **Dependencies**: Only add necessary dependencies and keep them updated
4. **Code Reviews**: All code changes require security review
5. **Testing**: Include security tests for new features
6. **Documentation**: Document security considerations for complex features

## Security Updates

Security updates will be released as quickly as possible. Subscribe to GitHub repository notifications to stay informed about security patches.

Thank you for helping keep LokaID secure! 