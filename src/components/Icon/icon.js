import './icon.css';

export default function BuildIcon({ icon, classes }) {
    return (
        <div className="sidebar-icon">
            <div className={classes}>{icon}</div>
        </div>
    );
};